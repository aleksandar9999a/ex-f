type TEvents = {
  [key: string]: string;
};

export let events: TEvents = {
  onAbort: 'abort',
  onAnimationEnd: 'animationend',
  onAnimationIteration: 'animationiteration',
  onAnimationStart: 'animationstart',
  onAutocomplete: 'autocomplete',
  onAutocompleteError: 'autocompleteerror',
  onBeforeunload: 'beforeunload',
  onBlur: 'blur',
  onCancel: 'cancel',
  onCanPlay: 'canplay',
  onCanPlayThrough: 'canplaythrough',
  onChange: 'change',
  onClick: 'click',
  onClose: 'close',
  onContextMenu: 'contextmenu',
  onCueChange: 'cuechange',
  onDoubleClick: 'dblclick',
  onDevicemotion: 'devicemotion',
  onDeviceorientation: 'deviceorientation',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragEnter: 'dragenter',
  onDragLeave: 'dragleave',
  onDragOver: 'dragover',
  onDragStart: 'dragstart',
  onDrop: 'drop',
  onDurationChange: 'durationchange',
  onEmptied: 'emptied',
  onEnded: 'ended',
  onError: 'error',
  onFocus: 'focus',
  onHashChange: 'hashchange',
  onInput: 'input',
  onInvalid: 'invalid',
  onKeyDown: 'keydown',
  onKeyPress: 'keypress',
  onKeyUp: 'keyup',
  onLanguagechange: 'languagechange',
  onLoad: 'load',
  onLoadedData: 'loadeddata',
  onLoadedMetadata: 'loadedmetadata',
  onLoadStart: 'loadstart',
  onMessage: 'message',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onMouseWheel: 'mousewheel',
  onOffline: 'offline',
  onLine: 'line',
  onPageHide: 'pagehide',
  onPageShow: 'pageshow',
  onPause: 'pause',
  onPlay: 'play',
  onPlaying: 'playing',
  popstate: 'popstate',
  onProgress: 'progress',
  onRateChange: 'ratechange',
  onRejectionHandled: 'rejectionhandled',
  onReset: 'reset',
  onResize: 'resize',
  onScroll: 'scroll',
  onSearch: 'search',
  onSeeked: 'seeked',
  onSeeking: 'seeking',
  onSelect: 'select',
  onShow: 'show',
  onStalled: 'stalled',
  onStorage: 'storage',
  onSubmit: 'submit',
  onSuspend: 'suspend',
  onTimeUpdate: 'timeupdate',
  onToggle: 'toggle',
  onTransitionEnd: 'transitionend',
  onUnhandledrejection: 'unhandledrejection',
  onUnload: 'unload',
  onVolumeChange: 'volumechange',
  onWaiting: 'waiting',
  onWebkitAnimationEnd: 'webkitanimationend',
  onWebkitanimationiteration: 'webkitanimationiteration',
  onWebkitAnimationStart: 'webkitanimationstart',
  onWebkitTransitionEnd: 'webkittransitionend',
  onWheel: 'wheel',
};

export function addEvent(name: string, value: string) {
  events[name] = value;
}
