// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import { Link } from 'react-router-dom';
// import './newscard.css'
// interface CardsProps {
//   image: string;
//   title: string;
//   link: string;
// }
// // the cards used to link around the website
// export default function Cards({ image, title, link }: CardsProps) {
//   return (
//     <Card sx={{ minWidth: 150,transition: 'all 0.3s ease', width:"100%", height:"100%", minHeight:"270px"}} className='card'>
//       <Link className="link h-full w-full" to={link} >
//       <CardActionArea className='h-[100%] w-full '>
//         <CardMedia
//           component="img"
//           height="10cqw"
//           image={image ? image : "/big_picture_logo.jpg.thumb.1280.1280.jpg"}
//           alt={title}   
//           className=''

//         />
//         <CardContent>
//           <Typography className="typography z-10" gutterBottom variant="h5" component="div" style={{ fontFamily: 'Arial, sans-serif' }}>
//         {title}
//           </Typography>
//         </CardContent>  
//       </CardActionArea>
//       </Link>
//     </Card>
//   );
// }   
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
interface CardsProps {
    image: string;
    title: string;
    desc: string;
    className: string;
}
// the cards used to link around the website
export default function Cards({ image, title, desc, className}: CardsProps) {
    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
                <CardMedia 
                    component="img"
                    height="140"
                    image={image ? image : "src\assets\IMG_2651.jpg"}
                    alt={title}
                    className={'max-h-[20cqw]'+ className}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}