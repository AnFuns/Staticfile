function _endebug(off) {
  if (!off) {
    return
  }

  /**
   * @description: 调试 - 反应
   * @param {*}
   * @return {*}
   */
  function _debugReaction() {
    console.log("用户在调试代码");

    console.clear();

    document.write("检测到非法调试,请关闭后刷新重试!");

    window.location.href = "/";
  }

  /**
   * @description: 调试 - debugger
   * @param {*}
   * @return {*}
   */
  function _debugger() {
    debugger;
  }

  /**
   * @description: 调试 - 反Debug调试
   * @param {*}
   * @return {*}
   */
  function _startDebug() {
    // 开始时间
    var startTime = new Date();

    _debugger();

    // 结束时间
    var endTime = new Date();

    if (endTime - startTime > 100) {
      _debugReaction();
    }
  };


  /**
   * @description: 初始化 - 监听参数
   * @param {*}
   * @return {*}
   */
  function _initMonitor() {
    _startDebug();
  }

  /**
   * @description: 监听 - 定时器
   * @param {*} function
   * @return {*}
   */
  setInterval(function () {
    _initMonitor();
  }, 10);
}

_endebug(true);