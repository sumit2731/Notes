import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
    {id: 'q2', author: 'Max2', text: 'Learning React is Great'}
];
const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    );
}

export default AllQuotes;