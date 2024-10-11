mini UV-Vis UI
==============
양자점 광원과 라즈베리파이, 조도센서를 이용해 실제 UV-Vis (자외선가시광선분광기)를 소형화한 UV-Vis 키트를 개발하는 연구입니다. (경기도과학전람회 특상, 전국과학전람회 출품작)

현재 electron이 아닌 python 자체만으로 구동하는 방향으로 개발중입니다.

## 사용법
1. 주어진 3D 모델링을 3D 프린터로 출력합니다.<br/><br/>
    ![image](https://github.com/user-attachments/assets/8d6910bf-f086-4bc7-8204-b628794989e3)<br/>

2. 라즈베리파이, 라즈베리파이 LCD (6인치), 아두이노, 점퍼선, 조도센서를 구매합니다.

3. 조도센서 - 아두이노 - 라즈베리파이 - LCD 순서대로 연결합니다.

4. 라즈베리파이에 전원을 연결한 후, python 설치, node.js 설치, arduino 설치 등 기본적인 세팅을 해줍니다.

5. 양자점 광원(필름)을 적절한 곳에 배치하고, 큐벳을 알맞은 위치에 배치하여 측정할 준비를 합니다.

6. 터미널을 열어 다음의 명령어를 입력합니다.

    ```bash
    mkdir projects
    cd projects
    git clone https://github.com/antihypnotic/chemRnE
    cd chemRnE\my-rne-app
    npm run watch
    ```

7. 다른 터미널을 열어 다음의 명령어를 입력합니다.

   ```bash
   cd projects\chemRnE\my-rne-app
   npm start
   ```

8. 또 다른 터미널을 열어 python 파일을 실행시킵니다.

   ```bash
   cd projects\chemRnE
   python main.py
   ```

9. 이후 실행된 애플리케이션에서 모드를 선택하여 측정합니다. (개발중)
