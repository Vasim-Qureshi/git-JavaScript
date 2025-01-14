const question={
    html:[
        {id:1,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:2,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:3,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:4,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"}
    ],
    css:[
        {id:1,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:2,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:3,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:4,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"}
    ],
    js:[
        {id:1,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:2,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:3,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"},
        {id:4,que:"test-1",opt_1:"opt_1",opt_2:"opt_2",opt_3:"opt_3",opt_4:"opt_4",ans:"ans"}
    ]
}

question.html.forEach(element => {
    console.log(element)
    console.log(element.id)
});

