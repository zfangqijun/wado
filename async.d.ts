export declare function delay(t: number): Promise<void>;
export declare function delayReject(t: number): Promise<never>;
export declare function withTimeout<T>(promise: Promise<T>, t: number): Promise<T>;