var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "44871",
        "ok": "16188",
        "ko": "28683"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "2",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10289",
        "ok": "7123",
        "ko": "10289"
    },
    "meanResponseTime": {
        "total": "960",
        "ok": "432",
        "ko": "1259"
    },
    "standardDeviation": {
        "total": "1314",
        "ok": "674",
        "ko": "1482"
    },
    "percentiles1": {
        "total": "11",
        "ok": "78",
        "ko": "4"
    },
    "percentiles2": {
        "total": "3002",
        "ok": "551",
        "ko": "3005"
    },
    "percentiles3": {
        "total": "3007",
        "ok": "1995",
        "ko": "3008"
    },
    "percentiles4": {
        "total": "3023",
        "ok": "2789",
        "ko": "3045"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13217,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 632,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2339,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 28683,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "149.57",
        "ok": "53.96",
        "ko": "95.61"
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
        "total": "44871",
        "ok": "16188",
        "ko": "28683"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "2",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "10289",
        "ok": "7123",
        "ko": "10289"
    },
    "meanResponseTime": {
        "total": "960",
        "ok": "432",
        "ko": "1259"
    },
    "standardDeviation": {
        "total": "1314",
        "ok": "674",
        "ko": "1482"
    },
    "percentiles1": {
        "total": "11",
        "ok": "78",
        "ko": "4"
    },
    "percentiles2": {
        "total": "3002",
        "ok": "551",
        "ko": "3005"
    },
    "percentiles3": {
        "total": "3007",
        "ok": "1995",
        "ko": "3008"
    },
    "percentiles4": {
        "total": "3023",
        "ok": "2789",
        "ko": "3045"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13217,
    "percentage": 29
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 632,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2339,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 28683,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "149.57",
        "ok": "53.96",
        "ko": "95.61"
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
