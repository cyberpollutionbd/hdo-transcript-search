import React from 'react';

var TopHits      = React.createFactory(require('./TopHits'));
var TopListChart = React.createFactory(require('./TopListChart'));

var {div,hr} = React.DOM;

class ResultDetails extends React.Component {
    render() {
        return div(
            null,
            div({className: 'row'},
                div({className: 'col-md-6'}, TopListChart({title: 'Personer', counts: this.props.result.peopleCounts})),
                div({className: 'col-md-6'}, TopListChart({title: 'Partier', counts: this.props.result.partyCounts}))
               ),
            hr(),
            div({className: 'row'}, TopHits({query: this.props.query, result: this.props.result}))
        );
    }
}

module.exports = ResultDetails;
