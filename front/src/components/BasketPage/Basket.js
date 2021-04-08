import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import {
  ACTION_DELETE_FROM_BASKET,
  ACTION_DELETE_ALL_BASKET,
} from "../../modules/books/books.action";
import {
  selectAllBooks,
  selectAllOrder,
} from "../../modules/books/books.selector";
import "./basket.sass";

function Basket(props) {
  const books = props.allBooks || [];
  const order = props.order;

  const checkType = (data, code, element) => {
    return data[code] ? element : null;
  };

  const reduceOrder = () =>
    order
      .map((order) => ({ [order.id]: true }))
      .reduce((obj, order) => Object.assign(obj, order), {});

  const onAlert = (event, fn, txt) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(txt)) {
      return fn(event);
    } else {
      return;
    }
  };

  const onAlertDeleteAll = (fn, txt) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(txt)) {
      return fn();
    } else {
      return;
    }
  };

  return (
    <Grid item lg={10} md={10} sm={12} xs={12} className="books">
      <Grid item xs={12} md={3} sm={10}>
        <Typography variant="h6" className="books__title --red">
          Cart
        </Typography>
        <div>
          <List className="books__list">
            {books &&
              books.map((element, index) => {
                return checkType(reduceOrder(), element.id, element) ? (
                  <ListItem key={index}>
                    <ListItemText primary={element.title} />
                    <ListItemText primary={element.author} />
                    <ListItemText primary={element.pages} />
                    <img src={element.cover_url} alt="book" />
                    <ListItemSecondaryAction>
                      <button
                        className="books__button --delete"
                        data-code={element.id}
                        onClick={(event) =>
                          onAlert(
                            event,
                            props.deleteFromBasket,
                            "Remove this book from the cart??"
                          )
                        }
                      >
                        Delete
                      </button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ) : null;
              })}
            {Object.keys(reduceOrder()).length &&
            !Object.values(reduceOrder()).every((value) => value === false) ? (
              <button
                className="books__button --deleteAll"
                onClick={() =>
                  onAlertDeleteAll(
                    props.deleteAllBasket,
                    "Remove all books from cart?"
                  )
                }
              >
                Delete all
              </button>
            ) : (
              "Your cart is empty"
            )}
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
  deleteFromBasket: (event) => {
    dispatch(ACTION_DELETE_FROM_BASKET(event));
  },
  deleteAllBasket: (event) => {
    dispatch(ACTION_DELETE_ALL_BASKET());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
