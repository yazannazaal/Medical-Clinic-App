import {
  Card,
  CardMedia,
  Typography,
  Rating,
  Grid,
  Container,
  Box,
} from "@mui/material";
import image from "../../assets/homeAssets/profileImage.png";
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image: image,
    rating: 4.5,
    comment: `The staff was incredibly helpful, and the care I received was outstanding. I felt heard and understood during every step of the process, which made a huge difference in my experience.
  
      I appreciate the personalized attention and would recommend this clinic to anyone looking for quality care.`,
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "/path-to-image2.jpg",
    rating: 5,
    comment: `Amazing experience from start to finish. The doctors are highly professional and genuinely care about their patients. They explained everything clearly and made sure I was comfortable.
  
      The environment is clean and welcoming, and the follow-up care exceeded my expectations.`,
  },
  {
    id: 3,
    name: "Sam Wilson",
    image: "/path-to-image3.jpg",
    rating: 4,
    comment: `I felt very comfortable and well taken care of throughout my visit. The team made sure I understood all my options and took time to address my concerns.
  
      The attention to detail and level of service were impressive. I highly recommend this clinic for anyone seeking professional, compassionate care.`,
  },
];

const TestimonialsSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "600",
            color: "#1f2937",
            mb: 2,
          }}
        >
          Patient Testimonials
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#4b5563",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Hear what our patients have to say about their experiences with our
          clinic and staff.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Card
              sx={{ borderRadius: 3, boxShadow: 3, textAlign: "center", p: 3 }}
            >
              <CardMedia
                component="img"
                image={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "100%",
                  mb: 2,
                }}
              />

              <Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {testimonial.name}
                </Typography>
                <Rating
                  value={testimonial.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 2 }}
                />
              </Box>

              <Typography variant="body2" color="textSecondary">
                {testimonial.comment}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsSection;
