
export default function home(req, res){
  res.status(200).json({
    name:'study',
    id: 2,
    components: ['abc', 'qac', 'vrb']
  });
}

