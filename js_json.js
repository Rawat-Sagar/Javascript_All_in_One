// Json
obj = {name:"sagar",length:1 , a:{this : 'tha"t'}}
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof(jso));
console.log(typeof(obj));

parsed = JSON.parse(`{"name":"sagar","length":1,"a":{"this":"that"}} `);
console.log(parsed);
