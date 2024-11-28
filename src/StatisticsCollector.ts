type TFormatType = 'bytes' | 'Mb';

class StatisticsCollector {
  sentUserVideoTraffic = 0;
  sentShareVideoTraffic = 0;
  isActiveAutoFormatTraffic = false;

  getSentVideoTraffic() {
    // Если sentUserVideoTraffic && sentShareVideoTraffic равны 0 и нигде им не задается значение, то не вижу смысла в переменной sentVideoTrafficInBytes.
    const sentVideoTrafficInBytes = this.sentUserVideoTraffic + this.sentShareVideoTraffic;
    const formatType = this.isActiveAutoFormatTraffic ? 'Mb' : 'bytes';

    return this.formatTraffic(sentVideoTrafficInBytes, formatType);
  }

  formatTraffic(trafficInBytes: number, formatType: TFormatType) {
    switch (formatType) {
      case 'bytes':
        return trafficInBytes;
      case 'Mb':
        return trafficInBytes / 1_048_576;
    }
  }
}
