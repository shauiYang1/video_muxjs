

const Html5 = videojs.getTech('Html5');
const mergeOptions = videojs.mergeOptions || videojs.util.mergeOptions;
const defaults = {
  mediaDataSource: {},
  config: {},
};
console.log('mpegtsjs', window.mpegts)
class MpegTsJs extends Html5 {

  /**
   * Create an instance of this Tech.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} ready
   *        Callback function to call when the `MpegTsJs` Tech is ready.
   */
  constructor(options, ready) {
    options = mergeOptions(defaults, options);
    super(options, ready);
  }

  /**
   * A getter/setter for the `MpegTsJs` Tech's source object.
   *
   * @param {Tech~SourceObject} [src]
   *        The source object you want to set on the `MpegTsJs` techs.
   *
   * @return {Tech~SourceObject|undefined}
   *         - The current source object when a source is not passed in.
   *         - undefined when setting
   */
  setSrc(src) {
    if (this.mpegtsPlayer) {
      // Is this necessary to change source?
      this.mpegtsPlayer.detachMediaElement();
      this.mpegtsPlayer.destroy();
    }

    const mediaDataSource = this.options_.mediaDataSource;
    const config = this.options_.config;

    mediaDataSource.type = mediaDataSource.type === undefined ? 'mpegts' : mediaDataSource.type;
    mediaDataSource.url = src;
    this.mpegtsPlayer = window.mpegts.createPlayer(mediaDataSource, config);
    this.mpegtsPlayer.attachMediaElement(this.el_);
    this.mpegtsPlayer.load();
  }

  /**
   * Dispose of mpegtsjs.
   */
  dispose() {
    if (this.mpegtsPlayer) {
      this.mpegtsPlayer.detachMediaElement();
      this.mpegtsPlayer.destroy();
    }
    super.dispose();
  }
}

/**
 * Check if the MpegTsJs tech is currently supported.
 *
 * @return {boolean}
 *          - True if the MpegTsJs tech is supported.
 *          - False otherwise.
 */
MpegTsJs.isSupported = function () {
  return window.mpegts && window.mpegts.isSupported();
};

/**
 * MpegTsJs supported mime types.
 *
 * @constant {Object}
 */
MpegTsJs.formats = {
  // https://datatracker.ietf.org/doc/html/rfc3555#section-4.2.9
  'video/mp2t': 'TS',
  'mpegts': 'TS',
};

/**
 * Check if the tech can support the given type
 *
 * @param {string} type
 *        The mimetype to check
 * @return {string} 'probably', 'maybe', or '' (empty string)
 */
MpegTsJs.canPlayType = function (type) {
  if (MpegTsJs.isSupported() && type in MpegTsJs.formats) {
    return 'maybe';
  }

  return '';
};

/**
 * Check if the tech can support the given source
 * @param {Object} srcObj
 *        The source object
 * @param {Object} options
 *        The options passed to the tech
 * @return {string} 'probably', 'maybe', or '' (empty string)
 */
MpegTsJs.canPlaySource = function (srcObj, options) {
  return MpegTsJs.canPlayType(srcObj.type);
};

// Include the version number.
MpegTsJs.VERSION = '__VERSION__';

videojs.registerTech('MpegTsJs', MpegTsJs);

window.MpegTsJs = MpegTsJs;