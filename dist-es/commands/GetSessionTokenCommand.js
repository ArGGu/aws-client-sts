import { __extends } from "tslib";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { GetSessionTokenRequest, GetSessionTokenResponse } from "../models/models_0";
import { deserializeAws_queryGetSessionTokenCommand, serializeAws_queryGetSessionTokenCommand, } from "../protocols/Aws_query";
var GetSessionTokenCommand = (function (_super) {
    __extends(GetSessionTokenCommand, _super);
    function GetSessionTokenCommand(input) {
        var _this = _super.call(this) || this;
        _this.input = input;
        return _this;
    }
    GetSessionTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getAwsAuthPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "STSClient";
        var commandName = "GetSessionTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSessionTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSessionTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSessionTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetSessionTokenCommand(input, context);
    };
    GetSessionTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetSessionTokenCommand(output, context);
    };
    return GetSessionTokenCommand;
}($Command));
export { GetSessionTokenCommand };
