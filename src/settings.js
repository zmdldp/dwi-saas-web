module.exports = {
  title: 'saas-web',
  onlinePreview: 'http://dwi.top:8012/onlinePreview?url=',
  druid: {
    authority: {
      "development": 'http://127.0.0.1:8764/druid',
      "production": 'http://dwi.top:8764/druid',
    },
    file: {
      "development": 'http://127.0.0.1:8765/druid',
      "production": 'http://dwi.top:8765/druid',
    },
    msg: {
      "development": 'http://127.0.0.1:8768/druid',
      "production": 'http://dwi.top:8768/druid',
    }
  }
}
