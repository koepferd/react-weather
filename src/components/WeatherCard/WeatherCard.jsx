"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var WeatherCard = /** @class */ (function (_super) {
    __extends(WeatherCard, _super);
    function WeatherCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeatherCard.prototype.render = function () {
        return (<div>
                <h1>{this.props.name}</h1>
                <img src={this.props.imageLink}/>
                <div>
                    <span>{this.props.tempLow}</span>
                    <span>{this.props.tempHigh}</span>
                </div>
            </div>);
    };
    return WeatherCard;
}(React.Component));
exports.WeatherCard = WeatherCard;
