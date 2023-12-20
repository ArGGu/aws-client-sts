import { STSClientConfig } from "./STSClient";
/**
 * @internal
 */
export declare const getRuntimeConfig: (config: STSClientConfig) => {
    runtime: string;
    sha256: import("@aws-sdk/types").HashConstructor;
    requestHandler: (import("@aws-sdk/types").RequestHandler<any, any, import("@aws-sdk/types").HttpHandlerOptions> & import("@aws-sdk/protocol-http").HttpHandler) | import("@aws-sdk/fetch-http-handler").FetchHttpHandler;
    apiVersion: string;
    urlParser: import("@aws-sdk/types").UrlParser;
    bodyLengthChecker: (body: any) => number | undefined;
    streamCollector: import("@aws-sdk/types").StreamCollector;
    base64Decoder: import("@aws-sdk/types").Decoder;
    base64Encoder: import("@aws-sdk/types").Encoder;
    utf8Decoder: import("@aws-sdk/types").Decoder;
    utf8Encoder: import("@aws-sdk/types").Encoder;
    disableHostPrefix: boolean;
    maxAttempts: number | import("@aws-sdk/types").Provider<number>;
    retryMode: string | import("@aws-sdk/types").Provider<string>;
    logger: import("@aws-sdk/types").Logger;
    serviceId: string;
    region: string | import("@aws-sdk/types").Provider<string> | import("@aws-sdk/types").Provider<any>;
    credentialDefaultProvider: (input: any) => import("@aws-sdk/types").Provider<import("@aws-sdk/types").Credentials>;
    regionInfoProvider: import("@aws-sdk/types").RegionInfoProvider;
    defaultUserAgentProvider: import("@aws-sdk/types").Provider<import("@aws-sdk/types").UserAgent>;
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
