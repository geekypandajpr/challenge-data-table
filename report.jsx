var React = require('react');
var ReactPivot = require('react-pivot');
var createReactClass = require('create-react-class');

var rows = require('./data.json');
var dimensions = [
  {value: 'date', title: 'Date'},
  {value: 'host', title: 'Host'}
];

var reduce = function(row, memo) {
  memo.load = (memo.load || 0) + (row.type == 'load' ? 1 : 0);
  memo.display = (memo.display || 0) + (row.type == 'display' ? 1 : 0);
  memo.impression = (memo.impression || 0) + (row.type == 'impression' ? 1 : 0); 
  return memo;
};

var calculations = [
    {
      title: 'Impressions',
      value: function(row) {
          return row.impression;
      },
      className: 'alignRight'
    },
    {
      title: 'Loads',
      value: function(row) {
        return row.load;
      },
      className: 'alignRight'
    },
    {
      title: 'Display',
      value: function(row) {
        return row.display;
      },
      className: 'alignRight'
    },
    {
      title: 'LoadRate',
      value: function(row) {
        return (row.load / row.impression) * 100;
      },
      template: function(val, row) {
          return val.toFixed(2) + '%';
      },
      className: 'alignRight'
    },
    {
      title: 'DisplayRate',
      value: function(row) {
        return (row.display / row.load) * 100;
      },
      template: function(val, row) {
          return val.toFixed(2) + '%';
      },
      className: 'alignRight'
    }
];

module.exports = createReactClass({
    render () {
        return (
          <div>
              <div>Report</div>
              <ReactPivot rows={rows}
                dimensions  ={dimensions}
                reduce={reduce}
                activeDimensions={['Date','Host']}
                calculations={calculations} />
          </div> 
        );
    }
})
