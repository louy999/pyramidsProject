import express, {Request, Response, Application} from 'express'
import multer from 'multer'
import path from 'path'
import sharp from 'sharp'
import fs from 'fs'

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads/image')
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.originalname + '-' + Date.now() + path.extname(file.originalname)
		)
	},
})

const uploadImg = multer({
	storage,
	fileFilter: (req, file, cb) => {
		// Allow only image files
		if (!file.mimetype.startsWith('image/')) {
			return cb(new Error('Only image files are allowed!') as any, false)
		}
		cb(null, true)
	},
})
const resizeImageMiddleware = (req: Request, res: Response, next: Function) => {
	if (!req.file) return next()

	const outputPath = './uploads/image/resized-' + req.file.filename

	// Resize the image using sharp
	sharp(req.file.path)
		.resize(600, 350) // Resize to 600x400
		.toFile(outputPath, (err: Error) => {
			if (err) {
				return next(err)
			}

			// Optional: Remove original image if you want to keep only resized one
			if (req.file && req.file.path) {
				fs.unlink(req.file.path, (err) => {
					if (err) console.log('Failed to delete original image:', err)
				})
			}

			// Ensure req.file exists before modifying it
			if (req.file) {
				req.file.filename = 'resized-' + req.file.filename
				req.file.path = outputPath
			}

			next()
		})
}

export {uploadImg, resizeImageMiddleware}
