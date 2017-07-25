import React from 'react';

class FullRoster extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            PlayerAPI.all().map((p) => {
              return (
                <li key={p.number}>
                  <Link to={`/roster`} />
                </li>
              )
            });
          }
        </ul>
      </div>
    )
  }
}

export default FullRoster;
