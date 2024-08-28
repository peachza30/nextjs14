import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Grid, Box, Card, Typography, Avatar, Stack, TextField ,Paper} from "@mui/material";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from "next/link";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FileUpload: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileTypeIcon, setFileTypeIcon] = useState<JSX.Element | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name);

      const fileType = file.type;

      if (fileType.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
          setFileTypeIcon(null);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
        setFileTypeIcon(getFileTypeIcon(fileType));
      }
    }
  }, []);

  const getFileTypeIcon = (fileType: string): JSX.Element => {
    if (fileType === 'application/pdf') {
      return <PictureAsPdfIcon sx={{ fontSize: 100 }} color="primary" />;
    } else if (fileType === 'text/plain' || fileType === 'application/msword' || fileType.includes('text')) {
      return <DescriptionIcon sx={{ fontSize: 100 }} color="primary" />;
    } else {
      return <InsertDriveFileIcon sx={{ fontSize: 100 }} color="primary" />;
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        border: "2px dashed #1976d2",
        backgroundColor: isDragActive ? "#e3f2fd" : "#fafafa",
        textAlign: "center",
      }}
    >
      <Box {...getRootProps()} sx={{ cursor: "pointer" }}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography variant="h6" color="primary">
            Drop the files here ...
          </Typography>
        ) : (
          <Typography variant="h6" color="textSecondary">
            Drag & drop some files here, or click to select files
          </Typography>
        )}
      </Box>

      {(preview || fileTypeIcon) && (
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {preview ? (
            <Avatar
              src={preview}
              alt="Selected Image"
              sx={{ width: 100, height: 100, mb: 1 }}
            />
          ) : (
            fileTypeIcon
          )}
          <Typography variant="body1">{fileName}</Typography>
        </Box>
      )}
      
    </Paper>


  );
};

export default FileUpload;