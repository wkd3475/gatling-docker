var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9497",
        "ok": "6072",
        "ko": "3425"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10244",
        "ok": "7301",
        "ko": "10244"
    },
    "meanResponseTime": {
        "total": "1206",
        "ok": "843",
        "ko": "1848"
    },
    "standardDeviation": {
        "total": "1259",
        "ok": "882",
        "ko": "1540"
    },
    "percentiles1": {
        "total": "718",
        "ok": "639",
        "ko": "3004"
    },
    "percentiles2": {
        "total": "2684",
        "ok": "1101",
        "ko": "3006"
    },
    "percentiles3": {
        "total": "3007",
        "ok": "2692",
        "ko": "3010"
    },
    "percentiles4": {
        "total": "3720",
        "ok": "2910",
        "ko": "4032"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3768,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 900,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1404,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 3425,
    "percentage": 36
},
    "meanNumberOfRequestsPerSecond": {
        "total": "94.97",
        "ok": "60.72",
        "ko": "34.25"
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
        "total": "9497",
        "ok": "6072",
        "ko": "3425"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10244",
        "ok": "7301",
        "ko": "10244"
    },
    "meanResponseTime": {
        "total": "1206",
        "ok": "843",
        "ko": "1848"
    },
    "standardDeviation": {
        "total": "1259",
        "ok": "882",
        "ko": "1540"
    },
    "percentiles1": {
        "total": "718",
        "ok": "639",
        "ko": "3004"
    },
    "percentiles2": {
        "total": "2684",
        "ok": "1101",
        "ko": "3006"
    },
    "percentiles3": {
        "total": "3007",
        "ok": "2692",
        "ko": "3010"
    },
    "percentiles4": {
        "total": "3720",
        "ok": "2910",
        "ko": "4032"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3768,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 900,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1404,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 3425,
    "percentage": 36
},
    "meanNumberOfRequestsPerSecond": {
        "total": "94.97",
        "ok": "60.72",
        "ko": "34.25"
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
