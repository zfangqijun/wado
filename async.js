export function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t))
}

export function delayReject(t) {
    return new Promise((_, reject) => setTimeout(reject, t))
}

export function withTimeout(promise, t) {
    return Promise.race([promise, delayReject(t)])
}