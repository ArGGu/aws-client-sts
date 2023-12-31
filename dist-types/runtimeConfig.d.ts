import { NodeHttpHandler } from "@aws-sdk/node-http-handler";
import { STSClientConfig } from "./STSClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: STSClientConfig) => {
    runtime: string;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    bodyLengthChecker: (body: any) => number | undefined;
    credentialDefaultProvider: import("./defaultStsRoleAssumers").DefaultCredentialProvider;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    region: string | import("@aws-sdk/types").Provider<string>;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | NodeHttpHandler;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    sha256: import("@aws-sdk/types").HashConstructor;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    disableHostPrefix: boolean;
    logger: import("@aws-sdk/types").Logger;
    serviceId: string;
    regionInfoProvider: import("@aws-sdk/types").RegionInfoProvider;
    endpoint?: string | import("@aws-sdk/types").Endpoint | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Endpoint> | undefined;
    tls?: boolean | undefined;
    retryStrategy?: import("@aws-sdk/types").RetryStrategy | undefined;
    credentials?: import("@aws-sdk/types").Credentials | import("@aws-sdk/types").Provider<import("@aws-sdk/types").Credentials> | undefined;
    signer?: import("@aws-sdk/types").RequestSigner | import("@aws-sdk/types").Provider<import("@aws-sdk/types").RequestSigner> | undefined;
    signingEscapePath?: boolean | undefined;
    systemClockOffset?: number | undefined;
    signingRegion?: string | undefined;
    signerConstructor?: (new (options: import("@aws-sdk/signature-v4").SignatureV4Init & import("@aws-sdk/signature-v4").SignatureV4CryptoInit) => import("@aws-sdk/types").RequestSigner) | undefined;
    customUserAgent?: string | import("@aws-sdk/types").UserAgent | undefined;
};
