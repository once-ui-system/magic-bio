"use client";

import React from "react";
import {
  Column,
  Row,
  Avatar,
  Card,
  Text,
  SmartImage,
  IconButton,
  Line,
  Fade,
  Heading,
} from "@/once-ui/components";
import { profile, social } from "@/once-ui/resources/config";
import { useOgData } from "@/hooks/useOgImage";

// Define the link type
interface LinkItem {
  title?: string;
  description?: string;
  media?: string;
  direction?: "row" | "column";
  url: string;
  children?: React.ReactNode;
}

const LinkCard = ({ link, index }: { link: LinkItem; index: number }) => {
  const { ogData, loading } = useOgData(!link.media ? link.url : null);
  const src = link.media || ogData?.image;
  const title = link.title || ogData?.title;
  const description = link.description || ogData?.description;

  return (
    <React.Fragment key={`link-${index}`}>
      <Card padding="16"
        mobileDirection="column"
        gap="20"
        fillWidth
        direction={link.direction || undefined}
        background="transparent"
        vertical="center"
        border="transparent"
        href={link.url}>
        {(src || loading) && (
          <SmartImage 
            radius="l"
            priority={index === 0}
            isLoading={loading}
            src={src || link.url}
            alt={title || ''}
            fillWidth
            sizes="(max-width: 768px) 100vw, 768px"
            aspectRatio="16 / 9"
          />
        )}
        {(title || description || link.children) && (
          <Column gap="8" fillWidth paddingX="24">
            {title && <Heading as="h2" variant="heading-strong-s" onBackground="neutral-strong">{title}</Heading>}
            {description && <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">{description}</Text>}
            {link.children && link.children}
          </Column>
        )}
      </Card>
      <Line />
    </React.Fragment>
  );
};

export default function Home() {
  return (
    <Column horizontal="center" paddingX="8" position="relative" flex={1}>
      <Column maxWidth="s" gap="-1" flex={1}>
      <Row fillWidth height="16" borderLeft="neutral-medium" borderRight="neutral-medium"/>
      <Column horizontal="center" border="neutral-medium" position="relative">
        {profile.cover && (
          <Row position="absolute" left="0" top="0" fill>
            <SmartImage priority fill src={profile.cover} alt={profile.name}/>
            <Fade fill position="absolute" to="top" bottom="0" left="0" pattern={{ display: true, size: "2" }}/>
          </Row>
        )}
        <Column position="relative" fillWidth padding="l" horizontal="center" gap="4">
          {profile.avatar && <Avatar src={profile.avatar} size="xl" />}
          {profile.name && <Heading variant="heading-strong-xl" marginTop={profile.avatar ? "24" : undefined}>{profile.name}</Heading>}
          {profile.bio && <Text variant="body-default-l" onBackground="neutral-weak">{profile.bio}</Text>}
        </Column>
        </Column>
        <Column horizontal="center" borderLeft="neutral-medium" borderRight="neutral-medium">
        {social?.length > 0 && (
          <Row gap="16" paddingX="l" paddingY="24" horizontal="center" fillWidth wrap borderTop="neutral-medium">
            {social.map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
                icon={item.icon}
                variant="ghost"
                size="m"
                tooltipPosition="bottom"
                tooltip={item.name}
              />
            ))}
          </Row>
        )}
      </Column>

      {profile.links?.length > 0 && (
        <Column border="neutral-medium" fillWidth flex={1} paddingBottom="16">
          {(profile.links as LinkItem[]).map((link, index) => (
            <LinkCard key={index} link={link} index={index} />
          ))}
        </Column>
      )}
      <Row fillWidth minHeight="16" paddingX="l" paddingY="20" borderLeft="neutral-medium" borderRight="neutral-medium" horizontal="center" textVariant="label-default-s">
        <Text onBackground="neutral-weak">{new Date().getFullYear()} <Text marginLeft="8" marginRight="8">/</Text> <Text onBackground="neutral-strong">{profile.name}</Text></Text>
      </Row>
    </Column>
    </Column>
  );
}