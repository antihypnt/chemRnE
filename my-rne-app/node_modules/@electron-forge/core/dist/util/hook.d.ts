import { ForgeListrTaskDefinition, ForgeMutatingHookSignatures, ForgeSimpleHookSignatures, ResolvedForgeConfig } from '@electron-forge/shared-types';
import { autoTrace } from '@electron-forge/tracer';
export declare const runHook: <Hook extends keyof ForgeSimpleHookSignatures>(forgeConfig: ResolvedForgeConfig, hookName: Hook, ...hookArgs: ForgeSimpleHookSignatures[Hook]) => Promise<void>;
export declare const getHookListrTasks: <Hook extends keyof ForgeSimpleHookSignatures>(childTrace: typeof autoTrace, forgeConfig: ResolvedForgeConfig, hookName: Hook, ...hookArgs: ForgeSimpleHookSignatures[Hook]) => Promise<ForgeListrTaskDefinition[]>;
export declare function runMutatingHook<Hook extends keyof ForgeMutatingHookSignatures>(forgeConfig: ResolvedForgeConfig, hookName: Hook, ...item: ForgeMutatingHookSignatures[Hook]): Promise<ForgeMutatingHookSignatures[Hook][0]>;
//# sourceMappingURL=hook.d.ts.map