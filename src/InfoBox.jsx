import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import Typography from '@mui/material/Typography';
 
 export default function InfoBox(info) {
    
    const HOT_URL = "https://cdn.pixabay.com/photo/2018/02/28/22/50/tree-3189339_1280.jpg";
    const COLD_URL = "https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg";
    const RAIN_URL = "https://cdn.pixabay.com/photo/2019/10/18/17/42/season-4559795_1280.jpg";
    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be described as {info.weather} & feels like {info.feelslike}&deg;C</p>
          </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}