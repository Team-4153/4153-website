import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import Link from 'next/link';
import { Sun, MapPin, At, BrandInstagram, BrandTwitter, BrandYoutube, BrandGithub } from 'tabler-icons-react';

type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: ContactIconVariant;
  url: string;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

function SocialIcon({
    icon: Icon,
    title,
    description,
    variant = 'gradient',
    className,
    url,
    ...others
  }: ContactIconProps) {
    const { classes, cx } = useStyles({ variant });
    return (
      <div className={cx(classes.wrapper, className)} {...others}>
        {variant === 'gradient' ? (
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            <Icon size={24} />
          </ThemeIcon>
        ) : (
          <Box mr="md">
            <Icon size={24} />
          </Box>
        )}
  
        <div>
          <Text size="xs" className={classes.title}>
            {title}
          </Text>
          <Link href={url}><a target='_blank'><Text className={classes.description}>{description}</Text></a></Link>
        </div>
      </div>
    );
  }

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: 'Email', description: 'info@team4153.org', icon: At, url: '/'},
  { title: 'Address', description: '1990 Diamond Drive Los Alamos, NM 87544', icon: MapPin, url: '/' },
  { title: 'Working hours', description: '5 p.m. – 7 p.m. Tue & Thurs', icon: Sun, url: '/' },
];

const SOCIALDATA = [
    { title: 'Instagram', description: '@Team4153', icon: BrandInstagram, url: '/'},
    { title: 'GitHub', description: 'Team-4153', icon: BrandGithub, url: 'https://github.com/Team-4153' },
    { title: 'Youtube', description: '@Team4153', icon: BrandYoutube, url: 'https://www.youtube.com/@Team4153'},
  ];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack>{items}</Stack>;
}

export function SocialIconsList({ data = SOCIALDATA, variant }: ContactIconsListProps) {
    const items = data.map((item, index) => <SocialIcon key={index} variant={variant} {...item} />);
    return <Stack>{items}</Stack>;
  }

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${
            theme.colors[theme.primaryColor][4]
          } 100%)`,
        })}
      >
        <SocialIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}