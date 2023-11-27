import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CycloneIcon from "@mui/icons-material/Cyclone";
export default function InfoBox({ info }) {
	let RIAN_IMG =
		"https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGF6YSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
	let SMOKE_IMG =
		"https://images.unsplash.com/photo-1637443719654-04e839df3aa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtb2tlJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
	let HOT_IMG =
		"https://images.unsplash.com/photo-1560134928-56b72fa51aaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxTVU58ZW58MHx8MHx8fDA%3D";
	let COLD_IMG =
		"https://plus.unsplash.com/premium_photo-1676747433701-ebe10f095b77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEzfHxDT0xEJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
	let COOL_IMG =
		"https://img.freepik.com/free-photo/looking-across-valley-towering-mountains_181624-37022.jpg?size=626&ext=jpg&ga=GA1.1.1145727996.1700989511&semt=sph";
	return (
		<div className="InfoBox">
			<div>
				<Card className="card" sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={
							info.weather == "haze"
								? SMOKE_IMG
								: info.temp < 1
								? COLD_IMG
								: info.humidity > 80
								? RIAN_IMG
								: info.temp > 15
								? HOT_IMG
								: COOL_IMG
						}
						title="green iguana"
					/>
					<CardContent className="cardContent">
						<Typography
							gutterBottom
							variant="h5"
							fontWeight={600}
							component="div"
						>
							{info.city}
							&nbsp;
							<span style={{ position: "relative", top: "4px" }}>
								{info.weather == "haze" ? (
									<CycloneIcon />
								) : info.temp < 1 ? (
									<AcUnitIcon />
								) : info.humidity > 80 ? (
									<ThunderstormIcon />
								) : info.temp > 15 ? (
									<WbSunnyIcon />
								) : (
									<AcUnitIcon />
								)}
							</span>
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							component="span"
							fontWeight={500}
						>
							<p>Temperature = {info.temp}&deg;C</p>
							<p>Humidity = {info.humidity}</p>
							<p>Min Temp = {info.tempMin}&deg;C</p>
							<p>Max Temp = {info.tempMax}&deg;C</p>
							<p>
								The weather can be described as{" "}
								<b>{info.weather}</b> feels like{" "}
								{info.feelsLike}&deg;C
							</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
