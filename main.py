import sys
import numpy as np
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QPushButton, QLabel, QLineEdit, QRadioButton, \
    QStackedWidget, QHBoxLayout
from PyQt5.QtCore import QTimer, Qt
from pyfirmata import Arduino, util
import time

board = Arduino('/dev/ttyACM0')
it = util.Iterator(board)
it.start()
board.analog[0].enable_reporting()

class AppWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        # 스택을 사용한 여러 페이지 구현
        self.stacked_widget = QStackedWidget()

        # 페이지 1: 사용자명 및 프로젝트명 입력
        self.page1 = QWidget()
        self.init_page1()

        # 페이지 2: 모드 선택 페이지
        self.page2 = QWidget()
        self.init_page2()

        # 페이지 3: 정량 분석 모드 페이지
        self.page3 = QWidget()
        self.init_page3()

        # 페이지 4: 키네틱 모드 페이지
        self.page4 = QWidget()
        self.init_page4()

        # 각 페이지를 스택에 추가
        self.stacked_widget.addWidget(self.page1)
        self.stacked_widget.addWidget(self.page2)
        self.stacked_widget.addWidget(self.page3)
        self.stacked_widget.addWidget(self.page4)

        # 레이아웃 설정
        main_layout = QVBoxLayout()
        main_layout.addWidget(self.stacked_widget)

        self.setLayout(main_layout)

        # 창 크기 설정
        self.setWindowTitle("mini UV-Vis")
        self.setGeometry(100, 100, 700, 400)  # 창 크기 설정
        self.show()

    def init_page1(self):
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignCenter)

        self.user_input = QLineEdit(self)
        self.user_input.setPlaceholderText("사용자명 입력")
        self.project_input = QLineEdit(self)
        self.project_input.setPlaceholderText("프로젝트명 입력")

        next_button = QPushButton("다음", self)
        next_button.clicked.connect(self.go_to_mode_selection)

        layout.addWidget(QLabel("사용자명과 프로젝트명을 입력하세요."))
        layout.addWidget(self.user_input)
        layout.addWidget(self.project_input)
        layout.addWidget(next_button)
        self.page1.setLayout(layout)

    def init_page2(self):
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignCenter)

        quant_button = QPushButton("정량 분석 모드", self)
        kinetic_button = QPushButton("키네틱 모드", self)

        quant_button.clicked.connect(self.go_to_quant_analysis)
        kinetic_button.clicked.connect(self.go_to_kinetic)

        layout.addWidget(QLabel("모드를 선택하세요."))
        layout.addWidget(quant_button)
        layout.addWidget(kinetic_button)
        self.page2.setLayout(layout)

    def init_page3(self):
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignCenter)

        self.gibon_value = QLabel("측정 값: 대기 중...")
        measure_button = QPushButton("측정", self)
        measure_button.clicked.connect(self.measure_sample)

        next_button = QPushButton("다음", self)
        next_button.clicked.connect(self.go_to_sample_input)

        layout.addWidget(QLabel("시료 칸에 증류수를 넣고 측정하세요."))
        layout.addWidget(self.gibon_value)
        layout.addWidget(measure_button)
        layout.addWidget(next_button)
        self.page3.setLayout(layout)

    def init_page4(self):
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignCenter)
        layout.addWidget(QLabel("키네틱 모드 페이지"))
        back_button = QPushButton("뒤로가기", self)
        back_button.clicked.connect(self.go_to_mode_selection)
        layout.addWidget(back_button)
        self.page4.setLayout(layout)

    def go_to_mode_selection(self):
        self.stacked_widget.setCurrentIndex(1)

    def go_to_quant_analysis(self):
        self.stacked_widget.setCurrentIndex(2)

    def go_to_kinetic(self):
        self.stacked_widget.setCurrentIndex(3)

    def measure_sample(self):
        self.water_measurement = board.analog[0].read()
        self.gibon_value.setText("측정 값: " + str(self.water_measurement))

    def go_to_sample_input(self):
        # 새로운 페이지 생성
        self.page5 = QWidget()
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignCenter)

        # 샘플 시료 입력 관련
        layout.addWidget(QLabel("샘플 시료의 농도를 입력하고 측정하세요."))

        # 샘플 수 선택 라디오 버튼
        sample_layout = QHBoxLayout()
        self.radio3 = QRadioButton("3개", self)
        self.radio4 = QRadioButton("4개", self)
        sample_layout.addWidget(self.radio3)
        sample_layout.addWidget(self.radio4)
        layout.addLayout(sample_layout)

        # 샘플 농도 입력 및 측정 버튼 (각 샘플별)
        self.sample1_input = QLineEdit(self)
        self.sample1_measure_button = QPushButton("샘플 1 측정", self)
        self.sample1_measure_button.clicked.connect(self.measure_sample1)

        self.sample2_input = QLineEdit(self)
        self.sample2_measure_button = QPushButton("샘플 2 측정", self)
        self.sample2_measure_button.clicked.connect(self.measure_sample2)

        self.sample3_input = QLineEdit(self)
        self.sample3_measure_button = QPushButton("샘플 3 측정", self)
        self.sample3_measure_button.clicked.connect(self.measure_sample3)

        self.sample4_input = QLineEdit(self)
        self.sample4_measure_button = QPushButton("샘플 4 측정", self)
        self.sample4_measure_button.clicked.connect(self.measure_sample4)
        self.sample4_input.setDisabled(True)  # 4개 시료 선택 시 활성화

        layout.addWidget(self.sample1_input)
        layout.addWidget(self.sample1_measure_button)
        layout.addWidget(self.sample2_input)
        layout.addWidget(self.sample2_measure_button)
        layout.addWidget(self.sample3_input)
        layout.addWidget(self.sample3_measure_button)
        layout.addWidget(self.sample4_input)
        layout.addWidget(self.sample4_measure_button)

        # "다음" 버튼 추가
        self.next_button = QPushButton("다음", self)
        self.next_button.clicked.connect(self.go_to_unknown_sample_input)
        layout.addWidget(self.next_button)

        self.page5.setLayout(layout)

        # 새 페이지를 스택에 추가하고 이동
        self.stacked_widget.addWidget(self.page5)
        self.stacked_widget.setCurrentWidget(self.page5)

        # 시료 4개 버튼은 비활성화 상태로 시작
        self.radio3.toggled.connect(self.toggle_sample4_input)
        self.radio4.toggled.connect(self.toggle_sample4_input)

    def toggle_sample4_input(self):
        if self.radio4.isChecked():
            self.sample4_input.setDisabled(False)
            self.sample4_measure_button.setDisabled(False)
        else:
            self.sample4_input.setDisabled(True)
            self.sample4_measure_button.setDisabled(True)

    def go_to_unknown_sample_input(self):
        # 미지 시료 농도 입력 페이지 생성
        self.page6 = QWidget()
        layout = QVBoxLayout()
        layout.setAlignment(Qt.AlignCenter)

        layout.addWidget(QLabel("미지 시료의 농도를 측정하세요."))

        self.unknown_sample_input = QLineEdit(self)
        layout.addWidget(self.unknown_sample_input)

        measure_unknown_button = QPushButton("미지 시료 측정", self)
        measure_unknown_button.clicked.connect(self.measure_unknown_sample)
        layout.addWidget(measure_unknown_button)

        self.page6.setLayout(layout)

        # 스택에 새로운 페이지 추가 및 이동
        self.stacked_widget.addWidget(self.page6)
        self.stacked_widget.setCurrentWidget(self.page6)

    def measure_sample1(self):
        self.sample1_value = board.analog[0].read()
        self.sample1_input.setText(f"측정 값: {self.sample1_value}")

    def measure_sample2(self):
        self.sample2_value = board.analog[0].read()
        self.sample2_input.setText(f"측정 값: {self.sample2_value}")

    def measure_sample3(self):
        self.sample3_value = board.analog[0].read()
        self.sample3_input.setText(f"측정 값: {self.sample3_value}")

    def measure_sample4(self):
        if self.radio4.isChecked():
            self.sample4_value = board.analog[0].read()
            self.sample4_input.setText(f"측정 값: {self.sample4_value}")

    def measure_unknown_sample(self):
        # 미지 시료 측정 (임시 값)
        self.unknown_sample_value = board.analog[0].read()
        self.unknown_sample_input.setText(f"측정 값: {self.unknown_sample_value}")
        self.calculate_unknown_concentration()

    def calculate_absorbance(self, sample_value):
        return (self.water_measurement - sample_value) / self.water_measurement

    def calculate_unknown_concentration(self):
        # 시료 흡광도 계산
        absorbances = []
        if hasattr(self, 'sample1_value'):
            absorbances.append(self.calculate_absorbance(self.sample1_value))
        if hasattr(self, 'sample2_value'):
            absorbances.append(self.calculate_absorbance(self.sample2_value))
        if hasattr(self, 'sample3_value'):
            absorbances.append(self.calculate_absorbance(self.sample3_value))
        if hasattr(self, 'sample4_value') and self.radio4.isChecked():
            absorbances.append(self.calculate_absorbance(self.sample4_value))

        # 샘플 농도 (예시로 농도 값을 하드코딩, 사용자가 입력 가능하도록 개선 가능)
        concentrations = np.array([1.0, 2.0, 3.0])
        if self.radio4.isChecked():
            concentrations = np.append(concentrations, [4.0])

        # 선형 회귀 계산 (np.polyfit을 사용한 1차 회귀)
        if len(absorbances) > 1:
            slope, intercept = np.polyfit(absorbances, concentrations, 1)

            # 미지 시료의 농도 예측
            unknown_absorbance = self.calculate_absorbance(self.unknown_sample_value)
            unknown_concentration = slope * unknown_absorbance + intercept

            # 예측 농도를 출력
            self.unknown_sample_input.setText(f"미지 시료 농도: {unknown_concentration:.2f}")


if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = AppWindow()
    sys.exit(app.exec_())
