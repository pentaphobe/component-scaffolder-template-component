import React from 'react';
import styled from 'styled-components';
import PropTypeDefinition from './index.propTypes';

const {{COMPONENT_NAME}}Base = ({label, ...props}) => (
	<div>
		\{{label}}
	</div>
);

const {{COMPONENT_NAME}} = styled( {{COMPONENT_NAME}}Base )`
	color: #f00;
	padding: 8px;
`;

{{COMPONENT_NAME}}.propTypes = PropTypeDefinition;

{{COMPONENT_NAME}}.defaultProps = {
	label: 'default label'
};