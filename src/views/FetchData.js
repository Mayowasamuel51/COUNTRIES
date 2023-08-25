import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
const api = 'https://restcountries.com/v3.1/all';
const product = "https://dummyjson.com/products"
const searchC = "https://restcountries.com/v3.1/name/";
const FetchData = () => {
    const [data, setData] = useState([]);
   
    const fetchsecondData = async () => {
        const resposne = await fetch(api)
        const data = await resposne.json()
        setData(data) // updated the array
        // console.log(data)
    }
  
    // useEffect(() => {
    //     fetchOneData();
    // }, [])
    useEffect(() => {
        fetchsecondData()
    }, []);
    return (
        <div>
            <div className="">
            
        

                <div className="container " style={{ marginTop: "119px" }}>
                    <h3 className="text-center">All COUNTRIES </h3>
                    <List list={data} />
                </div>

            </div>

        </div>
    )
}


function List({ list }) {
    return (
        <div className="d-flex flex-wrap justify-content-space-around" >
            {list.map((item, index) => {
                return (
                    <Card sx={{ maxWidth: 215 }} key={index} className="m-2">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="195"
                                image={item.flags.png}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name.common}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* {item.name.common} */}
                                </Typography>
                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1 '>Population</span>  {item.population}
                                </Typography>

                                <Typography variant="body2" className='mt-2' color="text.secondary">
                                    <span className='p-1'>Region</span>     {item.region}
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                more
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}
export default FetchData;