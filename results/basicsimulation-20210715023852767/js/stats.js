var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12300",
        "ok": "59",
        "ko": "12241"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "24",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "4023",
        "ok": "2729",
        "ko": "4023"
    },
    "meanResponseTime": {
        "total": "1128",
        "ok": "392",
        "ko": "1132"
    },
    "standardDeviation": {
        "total": "1337",
        "ok": "739",
        "ko": "1338"
    },
    "percentiles1": {
        "total": "110",
        "ok": "64",
        "ko": "112"
    },
    "percentiles2": {
        "total": "3001",
        "ok": "189",
        "ko": "3001"
    },
    "percentiles3": {
        "total": "3006",
        "ok": "2353",
        "ko": "3006"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2709",
        "ko": "3010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 12241,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.653",
        "ok": "0.488",
        "ko": "101.165"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "12300",
        "ok": "59",
        "ko": "12241"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "24",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "4023",
        "ok": "2729",
        "ko": "4023"
    },
    "meanResponseTime": {
        "total": "1128",
        "ok": "392",
        "ko": "1132"
    },
    "standardDeviation": {
        "total": "1337",
        "ok": "739",
        "ko": "1338"
    },
    "percentiles1": {
        "total": "110",
        "ok": "64",
        "ko": "112"
    },
    "percentiles2": {
        "total": "3001",
        "ok": "189",
        "ko": "3001"
    },
    "percentiles3": {
        "total": "3006",
        "ok": "2353",
        "ko": "3006"
    },
    "percentiles4": {
        "total": "3010",
        "ok": "2709",
        "ko": "3010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 12241,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.653",
        "ok": "0.488",
        "ko": "101.165"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
