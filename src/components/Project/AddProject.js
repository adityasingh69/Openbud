import React from "react";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import Icon from "material-ui/Icon";
/**
 * TODO:
 *
 *   Implement clent side form verification which is verifying if the email is of the correct form or not
 *   Implement to show errors in the form  Refer:-https://stackoverflow.com/questions/35901440/how-to-invalidate-a-textfield-in-material-ui?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
 *    Implement the taking the number of contribtors and adding that many lines below the contributors section
 *
 */

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "5%"
  },
  button: {
    margin: theme.spacing.unit,
    width: 100
  },
  fontsSize:{fontSize:"15px"},
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gitlink: "",
      description: "",
      icon: "",
      contributors: "",
      errors: [],
      numofcontributors: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
        
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
        <Grid item xs={12}>
          <h2 className="">SHOWCASE YOUR SKILLS</h2>
        </Grid>

          <form
            className={classes.container}
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                label="Name of the project"
                inputProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                FormHelperTextProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                value={this.state.name}
                helperText="Example- Openbud"
                onChange={this.handleChange("name")}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="gitlink"
                onChange={this.handleChange("gitlink")}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                FormHelperTextProps={{ className: this.props.classes.fontsSize }}
                label="Github Link"
                inputProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                helperText="Example- https://www.github.com/highskillzz/openbud"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="logo"
                label="Logo"
                onChange={this.handleChange("logo")}
                style={{ width: "75%", margin: "50 auto" }}
                inputProps={{ className: this.props.classes.fontsSize }}
                FormHelperTextProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                className={classes.textField}
                helperText="A link that points to the logo of the project"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="contributors"
                label="Other Contributors"
                FormHelperTextProps={{ className: this.props.classes.fontsSize }}                
                inputProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                style={{ width: "75%", margin: "50 auto" }}
                onChange={this.handleChange("contributors")}
                className={classes.textField}
                helperText="Example- highskillzz,devilcoder,thealgo"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description of the project*"
                onChange={this.handleChange("description")}
                multiline
                inputProps={{ className: this.props.classes.fontsSize }}
                FormHelperTextProps={{ className: this.props.classes.fontsSize }}
                InputLabelProps={{ className: this.props.classes.fontsSize }}
                rows="4"
                style={{ width: "75%", margin: "50 auto" }}
                className={classes.textField}
                margin="normal"
              />
            </Grid>
            <Button className={classes.button} variant="raised" color="primary">
              <div style={{padding:"5"}}>Send</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                margin="20"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AddProject);
