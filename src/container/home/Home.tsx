import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import withRouter, { Router } from "../../components/hoc/withRouter";
import { strings } from "../../localisation/strings";

import ElasticSearchBar from "../../components/search/ElasticSearchBar";
import NavTabs from "../../components/navtabs/NavTabs";
import FeedCard from "../../components/feed/FeedCard";

import "../../scss/global.scss"
import "./Home.scss"
import Feed from "../../components/feed/Feed";

interface HomeProps {
    router: Router;
}

function Home(props: HomeProps) {
    const { router } = props;
    const { feed } = useSelector((state: any) => state.feed);
    const [textSearch, setTextSearch] = useState<string>("");
    const searchBarRef = useRef(null);
    const [count, setCount] = useState(5);
    const [hasMoreItems, setHasMoreItems] = useState(count < feed.length);

    useEffect(() => {
        console.log(count)
    }, [count]);

    function nextPage() {
        let newCount = count + 10;
        let hasMoreItems = newCount < feed.length;
        setCount(hasMoreItems ? newCount : feed.length);
        setHasMoreItems(hasMoreItems)
    }

    return (
        <div className="home-container">
            <div className="view-content-header">
                <ElasticSearchBar
                    placeholder={strings.search}
                    onChange={(searchQuery) => {
                        setTextSearch(searchQuery)
                    }}
                    onRef={(ref: any) => {
                        searchBarRef.current = ref;
                    }}
                    initialValue={textSearch}
                />
                <NavTabs />
            </div>
            <div className="content">

                {feed.map((item: any, index: number) => {
                    return <FeedCard style={{}} key={index} item={item} />;
                })}
            </div>

        </div>
        //  <Feed hasMore={hasMoreItems} feedItems={feed.slice(0, count)} next={nextPage} />
    );
};

export default withRouter(Home);
