"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRegionInfoProvider = void 0;
const config_resolver_1 = require("@aws-sdk/config-resolver");
const regionHash = {
    "aws-global": {
        hostname: "sts.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "us-east-1-fips": {
        hostname: "sts-fips.us-east-1.amazonaws.com",
        signingRegion: "us-east-1",
    },
    "us-east-2-fips": {
        hostname: "sts-fips.us-east-2.amazonaws.com",
        signingRegion: "us-east-2",
    },
    "us-gov-east-1-fips": {
        hostname: "sts.us-gov-east-1.amazonaws.com",
        signingRegion: "us-gov-east-1",
    },
    "us-gov-west-1-fips": {
        hostname: "sts.us-gov-west-1.amazonaws.com",
        signingRegion: "us-gov-west-1",
    },
    "us-west-1-fips": {
        hostname: "sts-fips.us-west-1.amazonaws.com",
        signingRegion: "us-west-1",
    },
    "us-west-2-fips": {
        hostname: "sts-fips.us-west-2.amazonaws.com",
        signingRegion: "us-west-2",
    },
};
const partitionHash = {
    aws: {
        regions: [
            "af-south-1",
            "ap-east-1",
            "ap-northeast-1",
            "ap-northeast-2",
            "ap-northeast-3",
            "ap-south-1",
            "ap-southeast-1",
            "ap-southeast-2",
            "aws-global",
            "ca-central-1",
            "eu-central-1",
            "eu-north-1",
            "eu-south-1",
            "eu-west-1",
            "eu-west-2",
            "eu-west-3",
            "me-south-1",
            "sa-east-1",
            "us-east-1",
            "us-east-1-fips",
            "us-east-2",
            "us-east-2-fips",
            "us-west-1",
            "us-west-1-fips",
            "us-west-2",
            "us-west-2-fips",
        ],
        hostname: "sts.{region}.amazonaws.com",
    },
    "aws-cn": {
        regions: ["cn-north-1", "cn-northwest-1"],
        hostname: "sts.{region}.amazonaws.com.cn",
    },
    "aws-iso": {
        regions: ["us-iso-east-1"],
        hostname: "sts.{region}.c2s.ic.gov",
    },
    "aws-iso-b": {
        regions: ["us-isob-east-1"],
        hostname: "sts.{region}.sc2s.sgov.gov",
    },
    "aws-us-gov": {
        regions: ["us-gov-east-1", "us-gov-east-1-fips", "us-gov-west-1", "us-gov-west-1-fips"],
        hostname: "sts.{region}.amazonaws.com",
    },
};
const defaultRegionInfoProvider = async (region, options) => config_resolver_1.getRegionInfo(region, {
    ...options,
    signingService: "sts",
    regionHash,
    partitionHash,
});
exports.defaultRegionInfoProvider = defaultRegionInfoProvider;
