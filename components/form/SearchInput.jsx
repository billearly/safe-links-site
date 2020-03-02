import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  border-radius: 0.25rem;
  box-shadow: #00000054 0px 0.06em 0.75em;
  font-size: 1rem;
  padding: 1.25rem;
  width: 20rem;
`;

export class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderIndex: 0,
      placeholder: props.placeholders && props.placeholders[0]
        ? props.placeholders[0]
        : 'Enter link'
    }

    this.rotatePlaceholder = this.rotatePlaceholder.bind(this);

    this.rotatePlaceholder(props.placeholders);
  }

  rotatePlaceholder (placeholders) {
    if (placeholders && placeholders.length > 1) {
      setInterval(() => {
        const updatedIndex = this.state.placeholderIndex < placeholders.length - 1
          ? ++this.state.placeholderIndex
          : 0;

        this.setState({
          placeholderIndex: updatedIndex,
          placeholder: placeholders[updatedIndex]
        });
      }, 5000);
    }
  }

  render() {
    const {
      value,
      handleChange
    } = this.props;

    return (
      <StyledInput
        onChange={handleChange}
        value={value}
        placeholder={this.state.placeholder}
      />
    );
  }
}
