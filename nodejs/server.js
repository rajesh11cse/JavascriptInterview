const express = require("express")
const app = express()

app.get("/getfibonacci", (req, res) => {
    const startTime = new Date()
    const result = fibonacci(parseInt(req.query.number)) //parseInt is for converting string to number
    const endTime = new Date()
    res.json({
        number: parseInt(req.query.number),
        fibonacci: result,
        time: endTime.getTime() - startTime.getTime() + "ms",
    })
})

app.get("/testrequest", (req, res) => {
    res.send("I am unblocked now");
});

let i = 0;
const fibonacci = n => {
    if (n <= 1) {
        return 1
    }
    // console.log('Stack prococess', ++i)
    return fibonacci(n - 1) + fibonacci(n - 2)
}

app.listen(3000, () => console.log("listening on port 3000"))





// https://alvinlal.netlify.app/blog/single-thread-vs-child-process-vs-worker-threads-vs-cluster-in-nodejs