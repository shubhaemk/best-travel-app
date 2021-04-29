import { useEffect, useRef, useState } from "react";

import LocationCardComponent from "components/LocationCardComponent";
import SelectedCardBarComponent from "components/SelectedCardBarComponent/";

import { CARD_LIST } from "services/constant";

const HomeScreen = (props) => {
  const [feedData, setFeedData] = useState([]);
  const [chunkedFeedData, setChunkedFeedData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [windowSize, setWindowSize] = useState(0);

  const { selectedView } = props;

  const FeedRef = useRef();

  const setSelectedLocationLocal = (location) => {
    setSelectedLocation([...selectedLocation, location]);
    setFeedData((tempFeedData) => {
      const finalFeedData = tempFeedData.map((feed) => {
        if (feed.id === location.id) {
          return { ...feed, isSelected: true };
        } else return feed;
      });

      return finalFeedData;
    });
  };

  const removeLocation = (location) => {
    const finalLocation =
      location || selectedLocation[selectedLocation.length - 1];

    if (finalLocation) {
      setFeedData((tempFeedData) => {
        const finalFeedData = tempFeedData.map((feed) => {
          if (feed.id === finalLocation.id) {
            return { ...feed, isSelected: false };
          } else return feed;
        });

        return finalFeedData;
      });

      setSelectedLocation(
        selectedLocation.filter(
          (tempLocation) => tempLocation.id !== finalLocation.id
        )
      );
    }
  };

  const getColumnCount = (windowSize) => {
    console.log({ windowSize });
    if (windowSize <= 370) {
      return 1;
    }

    if (windowSize > 370 && windowSize <= 880) {
      return 2;
    }

    if (windowSize > 880 && windowSize < 1080) {
      return 3;
    }

    return 4;
  };

  useEffect(() => {
    const tempFeedData = CARD_LIST.map((item) => ({
      ...item,
      isSelected: false,
    }));

    setFeedData(tempFeedData);

    setWindowSize(FeedRef.current.clientWidth);

    const handleWindowResize = () => {
      setWindowSize(FeedRef.current.clientWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (feedData.length) {
      let index = 0;
      let chunkIndex = 0;
      const finalChunk = [];
      const columnCount = getColumnCount(windowSize);

      while (index < feedData.length) {
        if (chunkIndex === columnCount) {
          chunkIndex = 0;
        }
        if (finalChunk[chunkIndex]) {
          finalChunk[chunkIndex].push(feedData[index]);
        } else {
          finalChunk[chunkIndex] = [feedData[index]];
        }

        index++;
        chunkIndex++;
      }

      setChunkedFeedData(finalChunk);
    }
  }, [feedData, windowSize]);

  useEffect(() => {
    if (selectedView !== "card") {
      setSelectedLocation([]);
      const tempFeedData = CARD_LIST.map((item) => ({
        ...item,
        isSelected: false,
      }));

      setFeedData(tempFeedData);
    }
  }, [selectedView]);

  return (
    <div className="feed" ref={FeedRef}>
      {chunkedFeedData.map((chunk, index) => {
        return (
          <div
            className="feed-column"
            key={index}
            style={{ flex: chunkedFeedData.length }}
          >
            {chunk.map((cardDetails) => {
              const { id } = cardDetails;
              return (
                <LocationCardComponent
                  key={id}
                  cardDetails={cardDetails}
                  setSelectedLocation={setSelectedLocationLocal}
                  removeLocation={removeLocation}
                  selectedView={selectedView}
                />
              );
            })}
          </div>
        );
      })}

      {selectedLocation.length > 0 && (
        <div className="feed-floating-bar">
          <SelectedCardBarComponent
            selectedCardCount={selectedLocation.length}
            removeLocation={removeLocation}
          />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
