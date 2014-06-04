/**
 * @module gestures
 *
 * @class Drag
 * @constructor
 * @param {Object} pOptions
 * @param {Function} pHandler
 * @return {Drag}
 */


var Drag = (function (_super) {

    function Drag(pOptions, pHandler) {
        _super.call(this, pOptions, pHandler);
    }


    Fingers.__extend(Drag.prototype, _super.prototype, {

        _onFingerAdded: function(pNewFinger, pFingerList) {
            if(!this.isListening) {
                this._addListenedFinger(pNewFinger);

                this._handler(_super.EVENT_TYPE.start, this.listenedFingers[0]);
            }
        },

        _onFingerUpdate: function(pFinger) {
            this._handler(_super.EVENT_TYPE.move, this.listenedFingers[0]);
        },

        _onFingerRemoved: function(pFinger) {
            if(this.isListenedFinger(pFinger)) {
                this._handler(_super.EVENT_TYPE.end, this.listenedFingers[0]);

                this._removeAllListenedFingers();
            }
        }
    });

    return Drag;
})(Fingers.Gesture);

Fingers.gesture.Drag = Drag;