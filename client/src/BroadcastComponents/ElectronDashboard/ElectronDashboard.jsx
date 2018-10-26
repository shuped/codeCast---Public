import React from 'react';
import 'antd/dist/antd.css';




class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = [
      {
        title: 'HTML/CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        scheduledDate: "2018-03-25",
        scheduledTime: "9am"
      },
      {
        title: 'Node',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        scheduledDate: "2019-05-30",
        scheduledTime: "3pm"
      }
  ]
  }


  
  MakeScheduledStreamCard = (props) => {
    const { title, presentor, description, activeStreamId, imagePath } = props;
    // missing image path
    return (
      <div className="activeStreamCard" key={ activeStreamId } onClick={ () => this.GetStreamId( activeStreamId) }>
        <div className="banner">
          <div>
            <h1>{ title }</h1>
            <h2>{ presentor }</h2>
          </div>
          {/* to use for image later */}
          {/* <img src="#imagePath" /> */}
          <div className="imagePlaceholder">p</div>
        </div>
        <div className="description-container">
          { description }
        </div>
      </div>
    )
  }

  render() {  
    
    const renderStreams = this.state.activeStreams.map( (stream) => {
      return this.MakeActiveStreamCard(stream);  
    });

    return (



      <main className="streams">
        { renderStreams }
      </main>
    );
  }




}

// const mapStateToProps = (state) => {
//   return {
//     fileDir: state.directory.directoryStructure
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendFileID: (fileID) => dispatch(updateFile(fileID))
//   }
// }

export default connect(null, null)(Dashboard);


