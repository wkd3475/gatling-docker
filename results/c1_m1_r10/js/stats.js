var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "56700",
        "ok": "40111",
        "ko": "16589"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "3047"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "54460",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2162",
        "ok": "1177",
        "ko": "4543"
    },
    "standardDeviation": {
        "total": "2337",
        "ok": "1669",
        "ko": "1979"
    },
    "percentiles1": {
        "total": "1218",
        "ok": "684",
        "ko": "3654"
    },
    "percentiles2": {
        "total": "3493",
        "ok": "1449",
        "ko": "4556"
    },
    "percentiles3": {
        "total": "6518",
        "ok": "3771",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10042",
        "ok": "7976",
        "ko": "10858"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23649,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4596,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11866,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 16589,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "276.585",
        "ok": "195.663",
        "ko": "80.922"
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
        "total": "56700",
        "ok": "40111",
        "ko": "16589"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "20",
        "ko": "3047"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "54460",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "2162",
        "ok": "1177",
        "ko": "4543"
    },
    "standardDeviation": {
        "total": "2337",
        "ok": "1669",
        "ko": "1979"
    },
    "percentiles1": {
        "total": "1218",
        "ok": "684",
        "ko": "3654"
    },
    "percentiles2": {
        "total": "3493",
        "ok": "1449",
        "ko": "4556"
    },
    "percentiles3": {
        "total": "6518",
        "ok": "3771",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "10042",
        "ok": "7976",
        "ko": "10858"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23649,
    "percentage": 42
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4596,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11866,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 16589,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "276.585",
        "ok": "195.663",
        "ko": "80.922"
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
