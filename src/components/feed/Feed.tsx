import InfiniteLoader from 'react-window-infinite-loader';
import { VariableSizeList } from 'react-window';

import { TContentComponent } from '../../types/content.types';
import FeedCard from './FeedCard';
import AutoSizer from 'react-virtualized-auto-sizer';

interface FeedProps {
    feedItems: TContentComponent[];
    next: () => void;
    hasMore: boolean;
}

interface Props {
    index: number;
    data: any;
    style: any;
}

const Row = (props: Props) => {
    const { index, data, style } = props;
    const item = data.renderSet[index];
    return <FeedCard style={style} item={item} />;
};

/**
 * Functional component to render the feed using react-window and infinite-loader to increase
 * performance and reduce the load time of the feed. Will come in handy when the feed has a large
 * number of items coming from a network call.
 */
function Feed(props: FeedProps) {
    const data = {
        renderSet: props.feedItems,
    };
    const isItemLoaded = (index: number) => index < data.renderSet.length;
    const itemCount = props.hasMore
        ? data.renderSet.length + 1
        : data.renderSet.length;

    return (
        <AutoSizer>
            {({ width, height }) => (
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={itemCount}
                    loadMoreItems={props.next}
                >
                    {({ onItemsRendered, ref }) => (
                        <VariableSizeList
                            className="feed-container"
                            height={height}
                            itemCount={data.renderSet.length}
                            itemData={data}
                            itemSize={() => 600}
                            onItemsRendered={onItemsRendered}
                            ref={ref}
                            width={width}
                        >
                            {Row}
                        </VariableSizeList>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
}

export default Feed;
