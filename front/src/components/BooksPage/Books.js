import React, { useEffect } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import "./books.sass";
import {
  ACTION_FETCH_DATA,
  ACTION_ADD_TO_BASKET,
} from "../../modules/books/books.action";
import {
  selectAllBooks,
  selectAllOrder,
} from "../../modules/books/books.selector";

function Books(props) {
  const { actionFetchData } = props;

  useEffect(() => {
    actionFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const books = props.allBooks || [];
  const order = props.order;

  const checkType = (data, code, element) => {
    return data[code] ? element : null;
  };

  const reduceOrder = () =>
    order
      .map((order) => ({ [order.id]: true }))
      .reduce((obj, order) => Object.assign(obj, order), {});

  return (
    <Grid className="books">
      <Grid item>
        <Typography variant="h6" className="books__title">
          Book list
        </Typography>
        <div>
          <List className="books__list">
            {books.length
              ? books.map((el, idx) => (
                  <ListItem key={idx} className="book__list --item">
                    <ListItemText primary={el.title} />
                    <ListItemText primary={el.author} />
                    <ListItemText primary={`Liczba stron: ${el.pages}`} />
                    <img
                      src={el.cover_url}
                      alt="book"
                      className={"book__image"}
                    />
                    {checkType(reduceOrder(), el.id, el) ? null : (
                      <ListItemSecondaryAction>
                        <button
                          className="books__button"
                          data-code={el.id}
                          onClick={(event) => {
                            props.addToBasket(event);
                          }}
                        >
                          Add to cart
                        </button>
                      </ListItemSecondaryAction>
                    )}
                  </ListItem>
                ))
              : null}
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  allBooks: selectAllBooks(state),
  order: selectAllOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchData: () => {
    dispatch(ACTION_FETCH_DATA());
  },
  addToBasket: (event) => {
    dispatch(ACTION_ADD_TO_BASKET(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
