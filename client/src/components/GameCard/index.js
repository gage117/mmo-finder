import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../../index.css";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    width: 345,
  },
  cardBackgroundColor: {
    backgroundColor: '#7E88C1'
  },
  description: {
    backgroundColor: '#9299b7'
  },
  media: {
    height: '100px',
    backgroundSize: 'contain',
    backgroundColor: '#ddd',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  propertyName: {
    backgroundColor: '#bbb',
    paddingLeft: '5px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px'
    
    
  },
  propertyValue: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    margin: '0',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',


  },
  paddingClear: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    padding: '0',
    paddingTop: '15px',
    alignSelf: 'flex-end'

  },
  propertyTags: {
    color: 'red'
  }
}));

const generatePropertyName = (key) => {
  if (key === "pvp") return "PvP"
  if (key === "pve") return "PvE"
  if (key === "tags") return "Tags"
  const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || "";

  let propertyName = "";
  const splitKeyArr = key.split("_");
  splitKeyArr.length > 1 ?
    splitKeyArr.forEach(word => propertyName += `${capitalize(word)} `) :
    propertyName = capitalize(splitKeyArr[0]);

  return propertyName.trim();
}

const generatePropertyValue = (value) => {
  let propertyValue = "";

  if (value instanceof Date) {
    propertyValue = value.toISOString();
  } else if (Array.isArray(value)) {
    propertyValue = value.join(", ");
  } else if (typeof value === 'boolean') {
    value === true ? propertyValue = 'True' : propertyValue = 'False'
  } else {
    propertyValue = value;
  }

  return propertyValue;
}
// ---------------------
const generatePropertyTags = (key) => {
  if (key === "tags") return

  let propertyTags = "";

  return propertyTags;
}
// ----------------------

const renderGameProperty = (property, value, classes, idx, tags) => {
  if ( property === 'name' || property === 'description' || property === 'logo' || property === 'genre' ) {
    return;
  }

  const propertyName = generatePropertyName(property);
  const propertyValue = generatePropertyValue(value);
  return ( <div key={idx}>
    <Typography className={classes.propertyName} variant='h6'>{propertyName}</Typography>
    <Typography className={classes.propertyValue} paragraph>{propertyValue}</Typography>
    {/* <Typography className={classes.propertyTags} paragraph>{propertyTags}</Typography> */}
  </div>)

}

// ----------------------
const renderGameTags = (property, tags, classes) => {
  if ( property === 'tags') {
    // return <div> this shit better work</div>
  }
  
  const propertyTags = generatePropertyTags(property);
  return ( <div key={tags}>
    <Typography className={classes.propertyTags} variant='h6'>{propertyTags}</Typography>
  </div>)
}

// ----------------------

export default function GameCard({ game }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardBackgroundColor}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={game.name}
        subheader={game.genre}
      />
      <Link href={`/${game._id}`}>
        <CardMedia
          className={classes.media}
          image={game.logo}
          title={`${game.name} logo`}
        />
      </Link>
      <CardContent className={classes.description}>
        <Typography variant="body2" component="p">
          {game.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardBackgroundColor}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.paddingClear}>
          {Object.entries(game).map(([key, value], idx) => {
            return renderGameProperty(key, value, classes, idx);
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}