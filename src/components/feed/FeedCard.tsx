import { CardActions, CardContent, CardHeader, CardMedia, IconButton, Card, Typography } from "@mui/material";
import { Share, ThumbUpAltOutlined } from "@mui/icons-material";
import { TContentComponent } from "../../types/content.types";

import React from "react";

import "./FeedCard.scss";
import { getTimeDifference } from "../../helpers/stringHelper";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface FeedCardProps {
    item: TContentComponent
    style: any
}

function FeedCard(props: FeedCardProps) {
    const { item, style } = props;

    return (
        <Card style={style} sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }} className="feed-card-container">
            <CardHeader
                avatar={
                    <img className="avatar" src={item?.avatar ? item?.avatar : ''} alt="avatar" />
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
            <LazyLoadImage //Slow loading images
                className="post-image"
                alt={"Could not load image"}
                src={item.postImage}
                placeholderSrc={"https://placehold.jp/400x400.png"}
            />
            <CardContent>
                <div className="title">
                    {item.title}
                </div>
                <div className="description">
                    {item.postDescription}
                </div>
            </CardContent>
        </Card>
    );
};

export default FeedCard;
