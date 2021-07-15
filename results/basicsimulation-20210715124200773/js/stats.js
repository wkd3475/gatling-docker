var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "122850",
        "ok": "119517",
        "ko": "3333"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "3060"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55195",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "383",
        "ok": "273",
        "ko": "4303"
    },
    "standardDeviation": {
        "total": "1468",
        "ok": "1265",
        "ko": "2499"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "3675"
    },
    "percentiles2": {
        "total": "127",
        "ok": "100",
        "ko": "4322"
    },
    "percentiles3": {
        "total": "2251",
        "ok": "1317",
        "ko": "9019"
    },
    "percentiles4": {
        "total": "5266",
        "ok": "3875",
        "ko": "11336"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 109674,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3208,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6635,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 3333,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.595",
        "ok": "304.115",
        "ko": "8.481"
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
        "total": "122850",
        "ok": "119517",
        "ko": "3333"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "3060"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55195",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "383",
        "ok": "273",
        "ko": "4303"
    },
    "standardDeviation": {
        "total": "1468",
        "ok": "1265",
        "ko": "2499"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "3675"
    },
    "percentiles2": {
        "total": "127",
        "ok": "100",
        "ko": "4322"
    },
    "percentiles3": {
        "total": "2251",
        "ok": "1317",
        "ko": "9019"
    },
    "percentiles4": {
        "total": "5266",
        "ok": "3875",
        "ko": "11336"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 109674,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3208,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6635,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 3333,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.595",
        "ok": "304.115",
        "ko": "8.481"
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