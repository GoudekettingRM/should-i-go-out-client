import React from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";
import { FormattedMessage, injectIntl, IntlShape } from "react-intl";

interface ShareButtonsProps {
  intl: IntlShape;
}

const ShareButtons: React.FC<ShareButtonsProps> = props => {
  return (
    <div>
      <div>
        <h5>
          <FormattedMessage
            id="app.shareTitle"
            defaultMessage="Spread the word, not the virus"
          />{" "}
        </h5>
      </div>
      <div>
        <WhatsappShareButton
          url={"http://www.should-i-go-out.com/"}
          title={props.intl.formatMessage({
            id: "app.shareText",
            defaultMessage:
              "So you want to go outside during the Corona-crisis? Check this first before you go out!"
          })}>
          <WhatsappIcon className="shareIcon" size={40} round />
        </WhatsappShareButton>
        <FacebookShareButton
          url={"http://www.should-i-go-out.com/"}
          quote={props.intl.formatMessage({
            id: "app.shareText",
            defaultMessage:
              "So you want to go outside during the Corona-crisis? Check this first before you go out!"
          })}>
          <FacebookIcon className="shareIcon" size={40} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={"http://www.should-i-go-out.com/"}
          title={props.intl.formatMessage({
            id: "app.shareText",
            defaultMessage:
              "So you want to go outside during the Corona-crisis? Check this first before you go out!"
          })}>
          <TwitterIcon className="shareIcon" size={40} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default injectIntl(ShareButtons);
