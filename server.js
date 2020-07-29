const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.get('/', (req, res) => res.send('You are on the homepage!'))
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/post', function (req, res, next) {
	const {user, password} = req.body;
	if(user && password) {
  	next()
	} else {
		res.status(400).send('Tanto user como password deben estar definidos')
	}
})

app.use('/delete', function (req, res, next) {
	const {taskId} = req.body;
	if(taskId) {
  	next()
	} else {
		res.status(400).send('La taskId debe ser definida')
	}
})


app.post('/post',function(req,res){
	res.send(`Welcome, ${req.body.user}`);
});

app.delete('/delete',function(req,res){
	res.json({delete: true});
});

app.put('/put/:id',function(req,res){
	const updated = req.params.id;
	res.send(`Task ${updated} has been updated`);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
