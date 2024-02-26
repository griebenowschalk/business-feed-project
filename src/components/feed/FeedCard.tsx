import {
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Card,
    CardMedia,
} from '@mui/material';
import { Share, ThumbUpAltOutlined } from '@mui/icons-material';
import { TContentComponent } from '../../types/content.types';
import { getTimeDifference } from '../../helpers/stringHelper';

import './FeedCard.scss';
import { strings } from '../../localisation/strings';

interface FeedCardProps {
    item: TContentComponent;
    style?: Object;
}

/**
 * The feed card component that renders the feed card with the post details 
 * and uses lazy loading for the images
 * @param props 
 * @returns Feed card component
 */
function FeedCard(props: FeedCardProps) {
    const { item, style } = props;

    return (
        <Card
            style={style}
            sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' }}
            className="feed-card-container"
        >
            <CardHeader
                avatar={
                    <img className="avatar" src={item.avatar} alt="avatar" />
                }
                action={
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <ThumbUpAltOutlined />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </CardActions>
                }
                title={item.author}
                subheader={getTimeDifference(new Date(item.postTime))}
            />
            <CardMedia
                component="img"
                image={item.postImage}
                alt={strings.no_image}
                loading='lazy'
            />
            <CardContent>
                <div className="title">{item.title}</div>
                <div className="description">{item.postDescription}</div>
            </CardContent>
        </Card>
    );
}

export default FeedCard;
