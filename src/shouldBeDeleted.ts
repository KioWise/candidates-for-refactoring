// Можно вынести в отдельную переменную, так проще читать код и смотрится лучше
const [hasExpired, isRecurrent] = [timer.hasExpired(), !timer.isRecurrent()]
if (hasExpired && !isRecurrent) {
}
