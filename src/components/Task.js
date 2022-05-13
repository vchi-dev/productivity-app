import React from 'react';
import { IconButton, ButtonGroup } from '@chakra-ui/button';
import { useEditableControls, Editable, EditablePreview, EditableInput } from '@chakra-ui/editable';
import { Flex } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/react';
import { Check, Close, Edit } from '@mui/icons-material';

function Task() {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton icon={<Check />} {...getSubmitButtonProps()} />
        <IconButton icon={<Close />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <IconButton size='sm' icon={<Edit />} {...getEditButtonProps()} />
      </Flex>
    )
  }

  return (
    <Editable
      textAlign='center'
      defaultValue='Name Your Draft ✏️'
      fontSize='xl'
      isPreviewFocusable={false}
    >
      <EditablePreview />
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  )
}

export default Task