import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          date={faker.date.weekday()}
          content={faker.lorem.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Joe"
          date={faker.date.weekday()}
          content={faker.lorem.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          date={faker.date.weekday()}
          content={faker.lorem.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
